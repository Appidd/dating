/**
 * localStorage 的操作和访问
 */

export default {
    set,
    get,
    remove,
    clear,
    info,
    keys
  }
  /**
   * 存储键值对（异步存储）。
   * @param {Stirng} key 
   * @param {Any} value 
   */
  export function set(key, value) {
    return new Promise((resolve, reject) => {
      wx.setStorage({
        key: key,
        data: value,
        success() {
          resolve(value);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  }
  
  /**
   * 获取指定 key 对应的值（同步获取）。
   * @param {String} key 
   * @returns {Any}
   */
  export function get(key) {
    return wx.getStorageSync(key);
  }
  
  /**
   * 移出指定 key 的键值对（异步操作，不保证成功）
   * @param {String} key 
   */
  export function remove(key) {
    wx.removeStorage({
      key: key
    });
  }
  
  /**
   * 清除所有本地存储的键值对。
   */
  export function clear() {
    wx.clearStorage();
  }
  
  /**
   * 获取 Storage 存储信息。
   * @returns {Object}
   */
  export function info() {
    // { keys, currentSize, limitSize }
    return wx.getStorageInfoSync();
  }
  
  /**
   * 获取已存储的所有key
   * @returns {Array<String>}
   */
  export function keys() {
    let inf = info();
    return inf.keys;
  }