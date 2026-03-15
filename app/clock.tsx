import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const timeZones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'];

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold">Digital Clock</h1>
            <div className="mt-4">
                {timeZones.map((zone) => {
                    const localTime = new Date(time.toLocaleString('en-US', { timeZone: zone }));
                    return (
                        <div key={zone} className="text-lg">
                            {zone}: {localTime.toISOString().replace('T', ' ').substring(0, 19)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Clock;