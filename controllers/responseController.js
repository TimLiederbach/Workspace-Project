function sendOkResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.workspace || res.locals.workspaces
  })
}

function sendErrorResponse(err, req, res, next) {
  res.json({
    status: 'Error',
    message: err.message
  })
}

module.exports = {
  sendOkResponse,
  sendErrorResponse
}
