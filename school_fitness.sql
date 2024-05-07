/*
Source Host           : localhost:3306
Source Database       : school_fitness

Target Server Type    : MYSQL

*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_community
-- ----------------------------
DROP TABLE IF EXISTS `tb_community`;
CREATE TABLE `tb_community` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL COMMENT '登录用户名',
  `opinion` text COMMENT '建议',
  `type` varchar(255) DEFAULT NULL COMMENT '场馆类型',
  `score` double DEFAULT NULL COMMENT '评分',
  `experience` int(11) DEFAULT NULL,
  `environment` int(11) DEFAULT NULL,
  `facilities` int(11) DEFAULT NULL,
  `service` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_community
-- ----------------------------
INSERT INTO `tb_community` VALUES ('1', '123', '1234', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('2', '123', '1234', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('15', '123', '涛涛涛涛', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('16', '123', '啊实打实的', 'volleyball', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('17', '123', '123', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('18', '123', '1234', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('19', '123', '1234', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('20', '123', '1234', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('21', '123', '12341111', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('22', '123', '12341111我问问', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('23', '123', '委屈恶气', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('24', '123', '委屈恶气的撒大', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('25', '123', '委屈恶气的撒大1111', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('26', '123', '呃呃呃', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('27', '123', '123123', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('28', '123', '123123', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('29', '123', '呃呃呃呃', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('30', '123', 'rrrrrrr', 'volleyball', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('31', 'user', '123123', 'all', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('32', 'user', '123123', 'football', '6', '6', '6', '0', '0');
INSERT INTO `tb_community` VALUES ('33', '123', 'ggg', 'all', '8', '6', '6', '10', '10');

-- ----------------------------
-- Table structure for tb_community_like
-- ----------------------------
DROP TABLE IF EXISTS `tb_community_like`;
CREATE TABLE `tb_community_like` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `community_id` bigint(20) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_community_like
-- ----------------------------
INSERT INTO `tb_community_like` VALUES ('2', '1', '1234');
INSERT INTO `tb_community_like` VALUES ('7', '2', '123');
INSERT INTO `tb_community_like` VALUES ('8', '15', '123');
INSERT INTO `tb_community_like` VALUES ('10', '1', '123');
INSERT INTO `tb_community_like` VALUES ('12', '17', '123');
INSERT INTO `tb_community_like` VALUES ('14', '20', '123');

-- ----------------------------
-- Table structure for tb_discount_coupon
-- ----------------------------
DROP TABLE IF EXISTS `tb_discount_coupon`;
CREATE TABLE `tb_discount_coupon` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '优惠券名称',
  `start_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '开始时间',
  `end_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '结束时间',
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `available` int(11) DEFAULT NULL COMMENT '1可用2 不可用',
  `type` varchar(255) DEFAULT NULL COMMENT '场馆类型',
  `price` decimal(10,2) DEFAULT NULL COMMENT '立减折扣',
  `discount` decimal(10,2) DEFAULT NULL COMMENT '打折折扣',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_discount_coupon
-- ----------------------------
INSERT INTO `tb_discount_coupon` VALUES ('1', 'Discount 10', '2024-04-23 10:14:55', '2024-09-22 17:15:10', '2024-04-23 10:14:55', null, null, '10.00', null);
INSERT INTO `tb_discount_coupon` VALUES ('2', '10% Off', '2024-04-23 10:15:00', '2024-09-22 17:46:44', '2024-04-23 10:15:00', null, null, null, '0.90');
INSERT INTO `tb_discount_coupon` VALUES ('1', 'Discount 5', '2024-04-23 10:14:55', '2024-09-22 17:15:10', '2024-04-23 10:14:55', null, null, '5.00', null);
INSERT INTO `tb_discount_coupon` VALUES ('2', '25% Off', '2024-04-23 10:15:00', '2024-09-22 17:46:44', '2024-04-23 10:15:00', null, null, null, '0.75');

-- ----------------------------
-- Table structure for tb_home
-- ----------------------------
DROP TABLE IF EXISTS `tb_home`;
CREATE TABLE `tb_home` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_home
-- ----------------------------

-- ----------------------------
-- Table structure for tb_home_jj
-- ----------------------------
DROP TABLE IF EXISTS `tb_home_jj`;
CREATE TABLE `tb_home_jj` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `synopsis` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_home_jj
-- ----------------------------

-- ----------------------------
-- Table structure for tb_order
-- ----------------------------
DROP TABLE IF EXISTS `tb_order`;
CREATE TABLE `tb_order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `discount_id` bigint(20) DEFAULT NULL COMMENT '优惠券',
  `pay_type` varchar(255) DEFAULT NULL COMMENT '支付方式',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '订单创建时间',
  `use_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '使用时间',
  `available` int(255) DEFAULT NULL COMMENT '1支付2 未支付',
  `court` varchar(255) DEFAULT NULL COMMENT '场次',
  `time` varchar(255) DEFAULT NULL COMMENT '时间',
  `price` varchar(255) DEFAULT NULL COMMENT '价格',
  `type` varchar(255) DEFAULT NULL COMMENT '场地类型',
  `user_name` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1714186692023 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_order
-- ----------------------------
INSERT INTO `tb_order` VALUES ('141231231', null, 'Membercardpay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '1', '11:00', '82.8', 'Football', '123', '2');
INSERT INTO `tb_order` VALUES ('231231231', null, 'Wechatpay', '2024-04-27 15:24:57', '2024-04-30 13:14:58', null, '4', '9:00', '96', 'TableTennis', '123', '2');
INSERT INTO `tb_order` VALUES ('1231231244', '1', '微信', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '3', '8:00', '20', 'TableTennis', '123', '2');
INSERT INTO `tb_order` VALUES ('1231232324', null, 'Wechatpay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '4', '8:00', '76', 'TableTennis', '123', '2');
INSERT INTO `tb_order` VALUES ('1714182635178', null, 'Wechatpay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '2', '8:00', '112', 'Basketball', '123', '2');
INSERT INTO `tb_order` VALUES ('1714186604991', null, 'Alipay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '1', '8:00', '20', 'Football', 'user', '2');
INSERT INTO `tb_order` VALUES ('1714186667085', null, 'Alipay', '2024-04-27 15:20:56', '2024-04-30 13:14:58', null, '1', '8:00', '21', 'Basketball', 'user', '2');
INSERT INTO `tb_order` VALUES ('1714186675077', null, 'Wechatpay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '1', '8:00', '21', 'Volleyball', 'user', '2');
INSERT INTO `tb_order` VALUES ('1714186679531', null, 'Membercardpay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '1', '8:00', '21', 'Badminton', 'user', '2');
INSERT INTO `tb_order` VALUES ('1714186683392', null, 'Alipay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '1', '8:00', '21', 'TableTennis', 'user', '2');
INSERT INTO `tb_order` VALUES ('1714186683393', null, 'Alipay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '1', '9:00', '21', 'TableTennis', 'user', '2');
INSERT INTO `tb_order` VALUES ('1714186688346', null, 'Membercardpay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '1', '9:00', '21', 'Tennis', 'user', '2');
INSERT INTO `tb_order` VALUES ('1714186692022', null, 'Wechatpay', '2024-04-27 13:14:58', '2024-04-27 13:14:58', null, '1', '8:00', '21', 'Fitness', 'user', '2');

-- ----------------------------
-- Table structure for tb_product
-- ----------------------------
DROP TABLE IF EXISTS `tb_product`;
CREATE TABLE `tb_product` (
  `id` bigint(20) NOT NULL,
  `product` varchar(255) DEFAULT NULL COMMENT '场地名',
  `num` int(11) DEFAULT NULL COMMENT '票数量',
  `court` int(255) DEFAULT NULL COMMENT '场地数量',
  `available` int(11) DEFAULT NULL COMMENT '是否可用',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_product
-- ----------------------------
INSERT INTO `tb_product` VALUES ('1', 'fitness', '88', '1', '2', null);
INSERT INTO `tb_product` VALUES ('2', 'tableTennis', '6', '6', '1', null);
INSERT INTO `tb_product` VALUES ('3', 'tennis', '6', '5', '2', null);
INSERT INTO `tb_product` VALUES ('4', 'badminton', '8', '5', '1', null);
INSERT INTO `tb_product` VALUES ('5', 'volleyball', '99', '4', '1', null);
INSERT INTO `tb_product` VALUES ('6', 'basketball', '7', '3', '1', null);
INSERT INTO `tb_product` VALUES ('7', 'football', '8', '2', '1', null);
INSERT INTO `tb_product` VALUES ('8', 'swimming', '7', '2', '1', null);

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user` (
  `user_name` varchar(255) NOT NULL COMMENT '用户名',
  `mobile` varchar(255) DEFAULT NULL COMMENT '电话',
  `mobile2` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `nick_name` varchar(255) DEFAULT NULL COMMENT '昵称',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `gender` varchar(55) DEFAULT NULL COMMENT '性别',
  `student_id` varchar(255) DEFAULT NULL COMMENT '学号',
  `country` varchar(255) DEFAULT NULL COMMENT '国家',
  `city` varchar(255) DEFAULT NULL COMMENT '城市',
  `date_birth` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '出生日期',
  `height` double DEFAULT NULL COMMENT '身高',
  `weight` double DEFAULT NULL COMMENT '体重',
  `bmi` double DEFAULT NULL COMMENT 'bmi',
  `vital_capacity` varchar(255) DEFAULT NULL COMMENT '肺活量',
  `short_term_fitness_goal` varchar(255) DEFAULT NULL COMMENT '健身目标',
  `is_admin` int(11) DEFAULT '2' COMMENT '1是管理员2不是',
  `id_card` varchar(255) DEFAULT NULL,
  `school` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `long_term_fitness_goal` varchar(255) DEFAULT NULL COMMENT '健身目标',
  `special_fitness_goal` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES ('123', '17665380100', '444', '123@qq.com', '222', '123', null, 'male', '123', '12333', '乌鲁木齐', '2024-04-27 09:53:23', '666', '999', '111', '29', '123', '1', '5555', '1122', '123123', '123', '123');
INSERT INTO `tb_user` VALUES ('aaa', null, null, '111@qq.com', '123123', null, null, null, null, null, null, null, null, null, null, null, null, '2', null, null, null, null, null);
INSERT INTO `tb_user` VALUES ('string', 'string', null, 'string', 'string', 'string', '-2147483648', '-2147483648', 'string', 'string', 'string', '2019-08-24 14:15:22', '0', '0', '0', 'string', 'string', '2', null, null, null, null, null);
INSERT INTO `tb_user` VALUES ('user', null, null, '1515516277@qq.com', 'qweqwe', null, null, null, null, null, null, null, null, null, null, null, null, '2', null, null, null, null, null);
INSERT INTO `tb_user` VALUES ('user1', null, null, null, null, '333', null, null, null, null, null, null, null, null, null, null, null, '2', null, null, null, null, null);

-- ----------------------------
-- Table structure for tb_user_login_his
-- ----------------------------
DROP TABLE IF EXISTS `tb_user_login_his`;
CREATE TABLE `tb_user_login_his` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `date_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_user_login_his
-- ----------------------------
INSERT INTO `tb_user_login_his` VALUES ('1', 'string', '127.0.0.1', '2024-04-21 16:07:55');
INSERT INTO `tb_user_login_his` VALUES ('2', '123', '127.0.0.1', '2024-04-21 16:13:56');
INSERT INTO `tb_user_login_his` VALUES ('3', '123', '127.0.0.1', '2024-04-21 17:20:05');
INSERT INTO `tb_user_login_his` VALUES ('4', '123', '127.0.0.1', '2024-04-21 17:25:13');
INSERT INTO `tb_user_login_his` VALUES ('5', '123', '127.0.0.1', '2024-04-21 17:26:33');
INSERT INTO `tb_user_login_his` VALUES ('6', '123', '127.0.0.1', '2024-04-21 17:50:23');
INSERT INTO `tb_user_login_his` VALUES ('7', '123', '127.0.0.1', '2024-04-21 18:12:31');
INSERT INTO `tb_user_login_his` VALUES ('8', '123', '127.0.0.1', '2024-04-22 11:37:22');
INSERT INTO `tb_user_login_his` VALUES ('9', '123', '127.0.0.1', '2024-04-22 20:42:40');
INSERT INTO `tb_user_login_his` VALUES ('10', '123', '127.0.0.1', '2024-04-22 20:44:08');
INSERT INTO `tb_user_login_his` VALUES ('11', '123', '127.0.0.1', '2024-04-22 20:44:19');
INSERT INTO `tb_user_login_his` VALUES ('12', '123', '127.0.0.1', '2024-04-22 20:45:01');
INSERT INTO `tb_user_login_his` VALUES ('13', '123', '127.0.0.1', '2024-04-22 20:45:22');
INSERT INTO `tb_user_login_his` VALUES ('14', '123', '127.0.0.1', '2024-04-22 21:11:16');
INSERT INTO `tb_user_login_his` VALUES ('15', '123', '127.0.0.1', '2024-04-22 21:14:44');
INSERT INTO `tb_user_login_his` VALUES ('16', '123', '127.0.0.1', '2024-04-23 21:15:52');
INSERT INTO `tb_user_login_his` VALUES ('17', '123', '127.0.0.1', '2024-04-23 21:56:54');
INSERT INTO `tb_user_login_his` VALUES ('18', '123', '127.0.0.1', '2024-04-25 15:59:26');
INSERT INTO `tb_user_login_his` VALUES ('19', '123', '127.0.0.1', '2024-04-25 16:03:35');
INSERT INTO `tb_user_login_his` VALUES ('20', '123', '127.0.0.1', '2024-04-25 16:03:45');
INSERT INTO `tb_user_login_his` VALUES ('21', '123', '127.0.0.1', '2024-04-27 09:46:12');
INSERT INTO `tb_user_login_his` VALUES ('22', 'string', '127.0.0.1', '2024-04-27 09:46:54');
INSERT INTO `tb_user_login_his` VALUES ('23', '123', '127.0.0.1', '2024-04-27 10:00:16');
INSERT INTO `tb_user_login_his` VALUES ('24', 'aaa', '127.0.0.1', '2024-04-27 10:23:05');
INSERT INTO `tb_user_login_his` VALUES ('25', 'user', '127.0.0.1', '2024-04-27 10:23:49');
INSERT INTO `tb_user_login_his` VALUES ('26', '123', '127.0.0.1', '2024-04-27 12:53:37');

-- ----------------------------
-- Table structure for tb_user_security_question
-- ----------------------------
DROP TABLE IF EXISTS `tb_user_security_question`;
CREATE TABLE `tb_user_security_question` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_user_security_question
-- ----------------------------
INSERT INTO `tb_user_security_question` VALUES ('3', '123', '问题1', '答案1');
INSERT INTO `tb_user_security_question` VALUES ('4', '123', '问题二', '答案二');
