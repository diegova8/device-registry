import React, { useState } from "react";

interface DeviceFormProps {
  onAddDevice: (device: Device) => void;
}

interface Device {
  deviceName: string;
  employeeName: string;
}

const DeviceForm: React.FC<DeviceFormProps> = ({ onAddDevice }) => {
  const [deviceName, setDeviceName] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (deviceName && employeeName) {
      onAddDevice({ deviceName, employeeName });
      setDeviceName("");
      setEmployeeName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Device Name"
        value={deviceName}
        onChange={(e) => setDeviceName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <button type="submit">Add Device</button>
    </form>
  );
};

export default DeviceForm;
