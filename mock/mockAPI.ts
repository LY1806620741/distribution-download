export default {
  'GET /api/v1/config': (req: any, res: any) => {
    // 返回文件
    // res.download('mock/resources/config.yml')

    // 返回文件内容
    res.sendFile(__dirname+'/resources/config.yml')
  }
};
