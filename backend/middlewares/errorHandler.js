const errorHandler = (err, req, res, next) => {
    console.error(err)

    if (err.name === 'Unauthorized') {
        return res.status(401).json({ error: 'Invalid email / password' });
    }
}

export default errorHandler