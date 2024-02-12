from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import uvicorn


HOST = config('HOST', cast=str)
DOMAIN = config('DOMAIN', cast=str)
WWW_DOMAIN = config('WWW_DOMAIN', cast=str)
DB_URL = config('DB_URL', cast=str)
DB_NAME = config('DB_NAME', cast=str)

# used by frontend calls
origins = [
"http://localhost",
"http://localhost:8010",
"http://"+HOST,
"http://"+HOST+":8010",
"http://"+DOMAIN,
"http://"+DOMAIN+":8010",
"http://"+WWW_DOMAIN,
"http://"+WWW_DOMAIN+":8010",
"ws://"+WWW_DOMAIN+":8010",
"ws://"+DOMAIN+":8010",
"ws://"+HOST+":8010",
]

app = FastAPI()

app.add_middleware(
CORSMiddleware,
allow_origins=origins,
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var ws = new WebSocket("ws://51.91.8.112:8010/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


@app.get("/")
async def get():
    return HTMLResponse(html)


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Message text was: {data}")
    except WebSocketDisconnect as e:
        print (str(e))
        pass
