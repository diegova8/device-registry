import React from "react";
import DeviceItem from "./DeviceItem";

interface Device {
  deviceName: string;
  employeeName: string;
}

interface DeviceListProps {
  devices: Device[];
}

const DeviceList: React.FC<DeviceListProps> = ({ devices }) => {
  return (
    <ul>
      {devices.map((device, index) => (
        <DeviceItem key={index} device={device} />
      ))}
    </ul>
  );
};

export default DeviceList;
