export const formatTimeDay = (isoString) => {
    const date = new Date(isoString);
    const time = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    return `${time} · ${day}`;
};
