import React from "react";

export default function Suggestion({ func }) {
  const suggestions = [
    "Hardware",
    "Software",
    "CPU",
    "RAM",
    "Motherboard",
    "Hard Drive",
    "Monitor",
    "Keyboard",
    "Mouse",
    "Printer",
    "Scanner",
    "USB",
    "Ethernet",
    "Wi-Fi",
    "Bluetooth",
    "HDMI",
    "VGA",
    "DVI",
    "DisplayPort",
    "Firewall",
    "Router",
    "Modem",
    "IP Address",
    "DNS",
    "HTTP",
    "HTTPS",
    "FTP",
    "SMTP",
    "POP",
    "IMAP",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Ruby",
    "PHP",
    "SQL",
    "API",
    "GUI",
    "CLI",
    "Operating System",
    "File System",
    "Command Prompt",
    "Terminal",
    "Computing",
    "Virtualization",
    "Cybersecurity",
  ];
  return (
    <div
      className="col-span-1 grid items-center suggestion text-white hover:bg-gray-500 hover:cursor-pointer"
      onClick={(e) => {
        func(e.target.innerText);
      }}
    >
      {suggestions[Math.floor((Math.random() * 100) / 2)]}
    </div>
  );
}
