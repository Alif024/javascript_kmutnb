function createLogEntry(message) {
  const timestamp = new Date().toLocaleTimeString('th-TH');
  const eventId = Math.random().toString(32).substring(2, 10).toUpperCase();
  const logMessage = message.toUpperCase();
  return `[${timestamp}] [${eventId}] - ${logMessage}`;
}

// Example usage:
const log = createLogEntry('User logged in');
console.log(log);