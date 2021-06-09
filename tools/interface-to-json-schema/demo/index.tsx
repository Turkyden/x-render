import React, { CSSProperties } from 'react';

interface IFpDemoProps {
  // eslint-disable-line
  /**
   * @title 标题
   * @description 输入标题
   * @pattern ^[A-Za-z0-9]+$
   **/
  title?: string,

  /**
   * @title 背景图片
   * @format image
   **/
  bgImage?: string,
  /**
   * @title 游戏类型
   * @description A 养成系，B 动作类
   * @enumNames ['养成系','动作类']
   */
  type: 'A' | 'B',

  /**
   * @title 玩的次数
   * @description 输入数字
   */
  num?: number,

  /**
   * @title 描述
   * @description 这里是一个数组格式
   **/
  desArr?: Array<{
    /**
     * @title 姓名
     */
    name: string,
    /**
    * @title 年份
    * @pattern ^[0-9]+$
    */
    year: number,
    /**
    * @title 正确答案(必填，L: 左边答案正确，R: 右边答案正确)
    * @enumNames ['养成系','动作类']
    */
    answerSide: 'L' | 'R',
  }>,

  /**
   * @title 是否喜欢
   * @description true 为喜欢，false 为不喜欢
   **/
  isLike?: boolean,

  /**
   * @title 上线时间
   * @description 请填入正确的时间格式
   * @format date
   */
  upDate?: string,

  /**
   * @title 样式配置
   * @description 这是一个对象类型
   */
  styleObj: {
    /**
     * @title 高度
     * @description 单位默认为px
     */
     height: number,
     /**
      * @title 长度
      * @description 单位默认为px
      */
     width: number,
     /**
      * @title  背景颜色
      * @description 选择色值
      * @format color
      */
     background: string,
  } & Partial<CSSProperties>,
};

/**
 * @class Game
 * @column 3
 */
export default class FpDemo extends React.Component<IFpDemoProps> {

  static defaultProps: IFpDemoProps = {
    title: '飞猪互动',
    type: 'A',
    bgImage:
      'https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png',
    styleObj: {
      width: 20,
      height: 20,
      background: '#ffffff',
    },
  };

  componentDidMount() {
    // 组件埋点
    // glodLog();
  }

  render() {
    const {
      bgImage,
      title,
      upDate,
      type,
      isLike,
      desArr,
      num,
      styleObj,
    } = this.props;
    return (
      <div className="page-wrap">
        <img src={bgImage} className="image-bg" />
        <h3 className="title">{title}</h3>
        <ul className="desc">
          <li>类型：{type === 'A' ? '养成类' : '动作类'}</li>
          <li>
            描述：
            {desArr &&
              desArr.length > 0 &&
              desArr.map((item, i) => {
                return (
                  <span className="desc-item" key={i}>
                    {item.name}-{item.year}
                  </span>
                );
              })}
          </li>
          <li>玩了：{num}</li>
          <li>是否喜欢：{isLike ? '喜欢' : '不喜欢'}</li>
          <li>更新时间：{upDate}</li>
          <li>
            区域点：
            <div style={styleObj} />
          </li>
        </ul>
      </div>
    );
  }
}
