

export const requestLogger = (req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    if (req.method === 'POST' || req.method === 'PUT') {
        console.log(`Body: ${JSON.stringify(req.body)}`);
    }
    next();
}
