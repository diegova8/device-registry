import React, { useState } from "react";
import Header from "./layout/Header";
import DeviceForm from "./components/DeviceForm";
import DeviceList from "./components/DeviceList";
import "./styles/App.css";

interface Device {
  deviceName: string;
  employeeName: string;
}

const App: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  const addDevice = (device: Device) => {
    setDevices([...devices, device]);
  };

  return (
    <div className="container">
      <Header />
      <DeviceForm onAddDevice={addDevice} />
      <DeviceList devices={devices} />
    </div>
  );
};

export default App;
