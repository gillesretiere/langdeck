import React, { useState } from "react";
import Toggle from "react-toggle";

const DarkLightModeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    return (
        <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode toggle"
      />
    )
}

export default DarkLightModeToggle