import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Folder, 
  FileText, 
  X, 
  Minus, 
  Maximize2, 
  Monitor, 
  Cpu, 
  Settings as SettingsIcon, 
  Clock,
  Layout,
  Calculator as CalcIcon,
  Palette,
  Check,
  Search,
  Wifi,
  Battery,
  Volume2,
  ChevronRight,
  User
} from 'lucide-react';

const App = () => {
  // --- System State ---
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);
  
  // --- User Preferences ---
  const [config, setConfig] = useState({
    wallpaper: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2000',
    accentColor: '#1a73e8', // Google Blue
    glassOpacity: 'bg-white/80',
    isDarkMode: false
  });

  const wallpapers = [
    { id: 'chromebook1', url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2000', label: 'Radiance' },
    { id: 'chromebook2', url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2000', label: 'Flow' },
    { id: 'chromebook3', url: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000', label: 'Gradient' },
    { id: 'chromebook4', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000', label: 'Dark Matter' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const APP_BASE_PATH = 'MultiPixel/game/rapturo/os/apps/';

  const openWindow = (type, title, fileName) => {
    const existing = windows.find(w => w.type === type && w.title === title);
    if (existing) {
      setActiveWindow(existing.id);
      setIsLauncherOpen(false);
      return;
    }

    const newWindow = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      title,
      fileName,
      x: 100,
      y: 50,
      width: 900,
      height: 600,
    };
    setWindows([...windows, newWindow]);
    setActiveWindow(newWindow.id);
    setIsLauncherOpen(false);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
    if (activeWindow === id) setActiveWindow(null);
  };

  const bringToFront = (id) => {
    setActiveWindow(id);
  };

  // --- ChromeOS Styled Components ---

  const Shelf = () => (
    <div className={`absolute bottom-0 left-0 right-0 h-12 bg-black/40 backdrop-blur-2xl flex items-center justify-between px-4 z-[9999]`}>
      {/* Launcher Button */}
      <button 
        onClick={() => setIsLauncherOpen(!isLauncherOpen)}
        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all"
      >
        <div className="w-4 h-4 rounded-full border-2 border-white" />
      </button>

      {/* Centered Apps (The "Shelf") */}
      <div className="flex-1 flex justify-center gap-2">
        {[
          { icon: <Folder />, label: 'Files', file: 'explorer.html', color: 'bg-blue-500' },
          { icon: <Terminal />, label: 'Terminal', file: 'terminal.html', color: 'bg-gray-800' },
          { icon: <CalcIcon />, label: 'Calculator', file: 'calculator.html', color: 'bg-teal-600' },
          { icon: <FileText />, label: 'Text', file: 'editor.html', color: 'bg-blue-600' },
        ].map((app) => (
          <button
            key={app.label}
            onClick={() => openWindow('app', app.label, app.file)}
            className="group relative flex flex-col items-center"
          >
            <div className={`w-10 h-10 rounded-full ${app.color} flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 shadow-lg`}>
              {React.cloneElement(app.icon, { size: 20 })}
            </div>
            {windows.some(w => w.title === app.label) && (
              <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Status Area */}
      <button 
        onClick={() => openWindow('settings', 'Settings', '')}
        className="flex items-center gap-3 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-white text-xs font-medium transition-all"
      >
        <Wifi size={14} />
        <Volume2 size={14} />
        <Battery size={14} />
        <div className="w-px h-3 bg-white/20 mx-1" />
        <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </button>
    </div>
  );

  const Launcher = () => (
    <div className="absolute inset-0 z-[10000] bg-black/20 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300" onClick={() => setIsLauncherOpen(false)}>
      <div 
        className="w-[600px] h-[500px] bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 flex flex-col gap-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            autoFocus
            type="text" 
            placeholder="Search your device, apps, and web"
            className="w-full h-12 pl-12 pr-4 bg-gray-100 rounded-full outline-none border-none text-gray-800 placeholder:text-gray-400"
          />
        </div>

        <div className="grid grid-cols-5 gap-6 mt-4">
          {[
            { icon: <Folder />, label: 'Files', file: 'explorer.html', color: 'text-blue-500' },
            { icon: <Terminal />, label: 'Terminal', file: 'terminal.html', color: 'text-gray-800' },
            { icon: <CalcIcon />, label: 'Calculator', file: 'calculator.html', color: 'text-teal-600' },
            { icon: <FileText />, label: 'Notes', file: 'editor.html', color: 'text-blue-600' },
            { icon: <SettingsIcon />, label: 'Settings', type: 'settings', color: 'text-gray-500' },
          ].map((app) => (
            <button 
              key={app.label}
              onClick={() => app.type === 'settings' ? openWindow('settings', 'Settings', '') : openWindow('app', app.label, app.file)}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center transition-all group-hover:shadow-md group-hover:-translate-y-1">
                <span className={app.color}>{React.cloneElement(app.icon, { size: 32 })}</span>
              </div>
              <span className="text-xs font-medium text-gray-700">{app.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const SettingsApp = () => (
    <div className="flex h-full bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4 pt-8">
        <h1 className="text-xl font-medium px-4 mb-6">Settings</h1>
        <div className="space-y-1">
          <button className="w-full flex items-center gap-4 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <Palette size={18} /> Personalization
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-2 hover:bg-gray-100 rounded-full text-sm text-gray-600">
            <Monitor size={18} /> Device
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-2 hover:bg-gray-100 rounded-full text-sm text-gray-600">
            <Wifi size={18} /> Network
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl mb-8">Personalization</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Wallpaper</h3>
                <span className="text-xs text-gray-400">Choose your look</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {wallpapers.map(wp => (
                  <button 
                    key={wp.id}
                    onClick={() => setConfig({...config, wallpaper: wp.url})}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${config.wallpaper === wp.url ? 'border-blue-500' : 'border-transparent'}`}
                  >
                    <img src={wp.url} className="w-full h-full object-cover" alt={wp.label} />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-medium">User Profile</p>
                  <p className="text-xs text-gray-500">Guest account</p>
                </div>
              </div>
              <ChevronRight className="text-gray-300" />
            </div>

            <div className="p-6">
              <h3 className="font-medium mb-4">Device accent</h3>
              <div className="flex gap-4">
                {['#1a73e8', '#d93025', '#1e8e3e', '#f9ab00'].map(color => (
                  <button 
                    key={color}
                    onClick={() => setConfig({...config, accentColor: color})}
                    className={`w-8 h-8 rounded-full border-2 ${config.accentColor === color ? 'border-gray-800' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const WindowFrame = ({ window: win }) => {
    const [pos, setPos] = useState({ x: win.x, y: win.y });
    const isDragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
      isDragging.current = true;
      offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      bringToFront(win.id);
    };

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
      };
      const handleMouseUp = () => { isDragging.current = false; };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, []);

    return (
      <div 
        className={`absolute rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col transition-shadow duration-300 bg-white ${
          activeWindow === win.id ? 'z-50 shadow-black/20' : 'z-10 brightness-95'
        }`}
        style={{ left: pos.x, top: pos.y, width: win.width, height: win.height }}
        onClick={() => bringToFront(win.id)}
      >
        {/* Title Bar - Chrome style */}
        <div onMouseDown={handleMouseDown} className="h-10 bg-white flex items-center justify-between px-4 cursor-move select-none border-b border-gray-100">
          <div className="flex items-center gap-3 text-gray-700 text-xs font-medium">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: config.accentColor }}></span>
            {win.title}
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400"><Minus size={14} /></button>
            <button 
              onClick={(e) => { e.stopPropagation(); closeWindow(win.id); }} 
              className="p-1.5 hover:bg-red-50 text-red-400 rounded-full transition-all"
            >
              <X size={14} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          {win.type === 'settings' ? <SettingsApp /> : (
            <iframe 
              src={`${APP_BASE_PATH}${win.fileName}`}
              className="w-full h-full border-none"
              title={win.title}
              sandbox="allow-scripts allow-same-origin"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="w-full h-screen relative overflow-hidden bg-gray-100 select-none transition-all duration-700 font-sans"
      style={{ 
        backgroundImage: `url(${config.wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Desktop Layer */}
      <div className="absolute inset-0 z-0" onClick={() => { setIsLauncherOpen(false); setActiveWindow(null); }} />

      {/* Render Windows */}
      {windows.map(win => <WindowFrame key={win.id} window={win} />)}

      {/* Launcher (Start Menu) */}
      {isLauncherOpen && <Launcher />}

      <Shelf />
    </div>
  );
};

export default App;
