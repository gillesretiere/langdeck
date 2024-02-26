import { SettingsPowerSharp } from "@mui/icons-material";

export function CreateConnection (onSetWs) {
    // A real implementation would actually connect to the server
    return {
      connect() {
        let userName = "Gilles";
        let socket = new WebSocket(`ws://51.91.8.112:4455/ws/a/${userName}`);
        console.log (socket);
        onSetWs(socket);
        console.log({userName} + ' ✅ Connecting to "' + socket + '" room...');
      },
      disconnect() {
        console.log('Gilles ❌ Disconnected from room');
      }
    };
  }
  