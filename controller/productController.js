export function createProduct(req, res) {

    console.log(req.user);

    res.json({
        message: 'product created successfully',
    })
}