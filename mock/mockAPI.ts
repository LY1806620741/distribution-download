// load static resources mock
import * as fs from 'fs';
const staticmap = fs
  .readdirSync(__dirname + '/resources/')
  .reduce((staticmap, filename) => {
    staticmap['GET /api/v1/' + filename] = (req: any, res: any) => {
      res.sendFile(__dirname + '/resources/' + filename);
    };
    return staticmap;
  }, {});

export default {
  ...staticmap,
  'GET /api/v1/config': (req: any, res: any) => {
    // 返回文件
    // res.download('mock/resources/config.yml')

    // 返回文件内容
    res.sendFile(__dirname + '/resources/config.yml');
  },
};
