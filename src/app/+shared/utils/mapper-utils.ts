declare let Reflect: any;

const jsonMetadataKey = 'jsonProperty';

export interface IJsonMetaData<T> {
  name?: string;
  clazz?: { new(): T };
}

/**
 * Json Property
 *
 * @export
 * @param {string} metadata
 * @returns {*}
 */
export function JsonProperty<T>(metadata?: IJsonMetaData<T>|string): any {
  if (metadata instanceof String || typeof metadata === 'string') {
    return Reflect.metadata(jsonMetadataKey, {
      name: metadata,
      clazz: undefined
    });
  } else {
    const metadataObj = metadata as IJsonMetaData<T>;

    return Reflect.metadata(jsonMetadataKey, {
        name: metadataObj ? metadataObj.name : undefined,
        clazz: metadataObj ? metadataObj.clazz : undefined
    });
  }
}

/**
 * TypeScript Json Mapper
 *
 * @export
 * @class MapperUtils
 */
export class MapperUtils {
  /**
   * Deserialize Json
   *
   * @static
   * @template T
   * @param {{ new (): T }} clazz
   * @param {*} jsonObjects
   * @returns {*}
   *
   * @memberOf MapperUtils
   */
  public static deserialize<T>(clazz: { new (): T }, jsonObjects: any): any {
    // if Arary
    if (Array.isArray(jsonObjects)) {
      const rtnObject: Array<any> = [];
      jsonObjects.forEach(jsonObject => {
        const test = this.doDeserialization(clazz, jsonObject);
        rtnObject.push(test);
      });

      return rtnObject;
    } else {
      return this.doDeserialization(clazz, jsonObjects);
    }
  }

  /**
   * Do Deserialization
   *
   * @private
   * @static
   * @template T
   * @param {{ new (): T }} clazz
   * @param {*} jsonObject
   * @returns
   *
   * @memberOf MapperUtils
   */
  private static doDeserialization<T>(clazz: { new (): T }, jsonObject: any): any {
    if ((clazz === undefined) || (jsonObject === undefined)) return undefined;
    const obj = new clazz();
    Object.keys(obj).forEach(key => {
        const propertyMetadataFn: (IJsonMetaData: any) => any = propertyMetadata => {
            const propertyName = propertyMetadata.name || key;
            const innerJson = jsonObject ? jsonObject[propertyName] : undefined;
            const clazz2 = this.getClazz(obj, key);
            if (this.isArray(clazz2)) {
                const metadata = this.getJsonProperty(obj, key);
                if (metadata.clazz || this.isPrimitive(clazz2)) {
                    if (innerJson && this.isArray(innerJson)) {
                        return innerJson.map(
                            (item: any) => this.deserialize(metadata.clazz, item)
                        );
                    } else {
                        return undefined;
                    }
                } else {
                    return innerJson;
                }

            } else if (!this.isPrimitive(clazz2)) {
                return this.deserialize(clazz2, innerJson);
            } else {
                return jsonObject ? jsonObject[propertyName] : undefined;
            }
        };

        const jsonMetadata = this.getJsonProperty(obj, key);
        if (jsonMetadata) {
            obj[key] = propertyMetadataFn(jsonMetadata);
        } else {
            if (jsonObject && jsonObject[key] !== undefined) {
                obj[key] = jsonObject[key];
            }
        }
    });

    return obj;
  }

  /**
   * Primitive Check
   *
   * @private
   * @static
   * @param {*} obj
   * @returns
   *
   * @memberOf MapperUtils
   */
  private static isPrimitive(obj: any): boolean {
    switch (typeof obj) {
      case 'string':
      case 'number':
      case 'boolean':
        return true;
    }

    return !!(obj instanceof String || obj === String ||
      obj instanceof Number || obj === Number ||
      obj instanceof Boolean || obj === Boolean);
  }

  /**
   * Array Check
   *
   * @static
   * @param {any} object
   * @returns
   * @memberof MapperUtils
   */
  private static isArray(object: any): boolean {
    if (object === Array) {
        return true;
    } else if (typeof Array.isArray === 'function') {
        return Array.isArray(object);
    } else {
        return !!(object instanceof Array);
    }
}

  /**
   * Get Clazz
   *
   * @private
   * @static
   * @param {*} target
   * @param {string} propertyKey
   * @returns {*}
   *
   * @memberOf MapperUtils
   */
  private static getClazz(target: any, propertyKey: string): any {
    return Reflect.getMetadata('design:type', target, propertyKey);
  }

  /**
   * Get Json Property
   *
   * @private
   * @static
   * @template T
   * @param {*} target
   * @param {string} propertyKey
   * @returns {IJsonMetaData}
   *
   * @memberOf MapperUtils
   */
  private static getJsonProperty<T>(target: any, propertyKey: string): IJsonMetaData<T> {
    return Reflect.getMetadata(jsonMetadataKey, target, propertyKey);
  }

}
