"use client";
import { useState } from "react";

export default function About() {
    const [date, setDate] = useState("");
    const [service, setService] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Generate calendar days
    const generateCalendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();
        
        const days = [];
        
        // Add empty cells for days before month starts
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        
        // Add all days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }
        
        return days;
    };

    const formatDate = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    const formatDisplayDate = (dateString: string) => {
        if (!dateString) return "Select a date";
        try {
            const date = new Date(dateString);
            const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        } catch (error) {
            return "Select a date";
        }
    };

    const handleDateSelect = (selectedDate: Date) => {
        setDate(formatDate(selectedDate));
        setShowCalendar(false);
    };

    const changeMonth = (direction: number) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(newMonth.getMonth() + direction);
        setCurrentMonth(newMonth);
    };

    const calendarDays = generateCalendarDays();
    const selectedDateDisplay = date ? formatDisplayDate(date) : "Select a date";

    return (
        <section className="about-section alternat-2 p_relative">
            <div className="auto-container">
                <div className="appointment-box">
                    <h4>Book an Appointment</h4>
                    <div className="form-inner">
                        <form method="post" action="index.html" className="default-form clearfix">
                            <div className="form-group">
                                <div className="icon-box"><i className="icon-15"></i></div>
                                <span>Choose services</span>
                                <div className="select-box">
                                    <select 
                                        className="selectmenu" 
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                        style={{
                                            position: 'relative',
                                            display: 'block',
                                            width: '80%',
                                            minHeight: '45px',
                                            height: 'auto',
                                            border: '1px solid rgba(189, 189, 189, 0.6)',
                                            borderRadius: '5px',
                                            fontSize: '14px',
                                            color: 'black',
                                            background: '#fff',
                                            padding: '8px 30px 8px 15px',
                                            transition: 'all 500ms ease',
                                            cursor: 'pointer',
                                            WebkitAppearance: 'none',
                                            MozAppearance: 'none',
                                            appearance: 'none',
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23BDBDBD' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 15px center',
                                            backgroundSize: '12px 8px',
                                            boxSizing: 'border-box'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = 'var(--theme-color)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = 'rgba(189, 189, 189, 0.6)';
                                        }}
                                    >
                                        <option value="" disabled>Select a service</option>
                                        <option value="physiotherapy">Physiotherapy</option>
                                        <option value="chiropractic">Chiropractic Adjustments</option>
                                        <option value="massage">Massage Therapy</option>
                                        <option value="electrotherapy">Electrotherapy</option>
                                        <option value="kinesio">Kinesio Taping</option>
                                        <option value="orthotics">Orthotics</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="icon-box"><i className="icon-16"></i></div>
                                <span>Date</span>
                                <div className="select-box" style={{ position: 'relative' }}>
                                    <div 
                                        style={{
                                            position: 'relative',
                                            display: 'block',
                                            width: '80%',
                                            minHeight: '45px',
                                            height: 'auto',
                                            border: '1px solid rgba(189, 189, 189, 0.6)',
                                            borderRadius: '5px',
                                            fontSize: '14px',
                                            color: date ? 'black' : '#BDBDBD',
                                            background: '#fff',
                                            padding: '12px 30px 12px 15px',
                                            transition: 'all 500ms ease',
                                            cursor: 'pointer',
                                            boxSizing: 'border-box',
                                            lineHeight: '20px',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23BDBDBD' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 15px center',
                                            backgroundSize: '12px 8px'
                                        }}
                                        onClick={() => setShowCalendar(!showCalendar)}
                                    >
                                        {selectedDateDisplay}
                                    </div>
                                    
                                    {showCalendar && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: '0',
                                            right: '0',
                                            background: '#fff',
                                            border: '1px solid rgba(189, 189, 189, 0.6)',
                                            borderRadius: '5px',
                                            marginTop: '5px',
                                            zIndex: 1000,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                            maxHeight: '400px',
                                            overflowY: 'auto'
                                        }}>
                                            {/* Calendar Header */}
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '10px 15px',
                                                borderBottom: '1px solid rgba(189, 189, 189, 0.3)',
                                                background: '#f8f9fa'
                                            }}>
                                                <button 
                                                    type="button"
                                                    onClick={() => changeMonth(-1)}
                                                    style={{
                                                        background: 'none',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        fontSize: '16px',
                                                        padding: '5px'
                                                    }}
                                                >
                                                    ‹
                                                </button>
                                                <span style={{ fontSize: '14px', fontWeight: '600' }}>
                                                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                                </span>
                                                <button 
                                                    type="button"
                                                    onClick={() => changeMonth(1)}
                                                    style={{
                                                        background: 'none',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        fontSize: '16px',
                                                        padding: '5px'
                                                    }}
                                                >
                                                    ›
                                                </button>
                                            </div>
                                            
                                            {/* Calendar Grid */}
                                            <div style={{ padding: '10px' }}>
                                                {/* Weekday headers */}
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '5px' }}>
                                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                                        <div key={day} style={{ 
                                                            textAlign: 'center', 
                                                            fontSize: '12px', 
                                                            fontWeight: '600',
                                                            color: '#666'
                                                        }}>
                                                            {day}
                                                        </div>
                                                    ))}
                                                </div>
                                                
                                                {/* Calendar days */}
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
                                                    {calendarDays.map((day, index) => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                height: '30px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                fontSize: '12px',
                                                                cursor: day ? 'pointer' : 'default',
                                                                background: day ? 'transparent' : 'transparent',
                                                                color: day ? '#333' : 'transparent',
                                                                borderRadius: '3px',
                                                                ...(day && new Date().toDateString() === day.toDateString() ? {
                                                                    background: 'var(--theme-color)',
                                                                    color: '#fff'
                                                                } : {}),
                                                                ...(day && date && formatDate(day) === date ? {
                                                                    background: '#007bff',
                                                                    color: '#fff'
                                                                } : {})
                                                            }}
                                                            onClick={() => day && handleDateSelect(day)}
                                                        >
                                                            {day ? day.getDate() : ''}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="icon-box"><i className="icon-17"></i></div>
                                <span>Phone</span>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    placeholder="+ XX (XXX) XXX XXX"
                                    style={{
                                        position: 'relative',
                                        display: 'block',
                                        width: '80%',
                                        minHeight: '45px',
                                        height: 'auto',
                                        border: '1px solid rgba(189, 189, 189, 0.6)',
                                        borderRadius: '5px',
                                        fontSize: '14px',
                                        color: 'black',
                                        background: '#fff',
                                        padding: '12px 15px',
                                        transition: 'all 500ms ease',
                                        boxSizing: 'border-box',
                                        lineHeight: '20px',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                />
                            </div>
                            <div className="message-btn">
                                <button type="submit" className="theme-btn btn-one">
                                    <span>Book Now</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
