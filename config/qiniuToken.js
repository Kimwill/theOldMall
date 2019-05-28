const qiniu = require('qiniu');
const accessKey = '1nEjNZstRGp-wygIKvLkVPBbDD5S6PHh7ZT0yt83';
const secretKey = 'rpytcnIRvtrmXmfdd83Z0yHCZBHVN3qyISWb4231';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: 'xiaoyiqin',
  // callbackUrl: 'http://localhost:3000/api/qiniu/uploadCb',
  expires: 31536000 // 一年
}
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

module.exports = {
	uploadToken
}