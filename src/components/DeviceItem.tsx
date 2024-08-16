import React from "react";

interface Device {
  deviceName: string;
  employeeName: string;
}

interface DeviceItemProps {
  device: Device;
}

const DeviceItem: React.FC<DeviceItemProps> = ({ device }) => {
  return (
    <li>
      <div className="device-info">
        <span>{device.deviceName}</span> - <span>{device.employeeName}</span>
      </div>
    </li>
  );
};

export default DeviceItem;
