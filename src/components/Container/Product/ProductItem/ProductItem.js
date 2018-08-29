import React, { Component } from 'react';
import styles from './ProductItem.scss';
import line_img from 'assets/img/line_img.png';

class ProductItem extends Component {
  state = {  }
  render() {
    const first = this.props.i === 0 ? styles.first : "";
    const intro_contents = this.props.i % 2 === 0 ? styles.intro_contentsRight : styles.intro_contentsLeft;
    const intro_contents_info_name = this.props.i % 2 === 0 ? styles.intro_contents_info_nameRight : styles.intro_contents_info_nameLeft;
    const intro_contents_info_desc = this.props.i % 2 === 0 ? styles.intro_contents_info_descRight : styles.intro_contents_info_descLeft;
    return (
      <div className={[styles.intro, first].join(" ")}>
        <img src={line_img} className={styles.intro_top_ln} alt="img"/>
        <img src={line_img} className={styles.intro_bottom_ln} alt="img"/>
        <div className={[styles.intro_contents,intro_contents].join(' ')}>
          <img src={this.props.image} className={styles.intro_contents_img} alt="img"/>
          <div className={styles.intro_contents_info}>
            <p className={[styles.intro_contents_info_name, intro_contents_info_name].join(' ')}>
              <a href={this.props.url}> </a>
              {this.props.title}&nbsp;&nbsp;IRINE
            </p>
            <p className={[styles.intro_contents_info_desc, intro_contents_info_desc].join(' ')}>
              {this.props.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
