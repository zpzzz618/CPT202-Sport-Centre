package com.ming.mapper;

import com.ming.entity.OrderEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2024-04-08 12:16:45
 */
@Mapper
public interface OrderDao extends BaseMapper<OrderEntity> {

    //@Select("select count(1) from tb_order where DATE(use_date)=CURDATE() and type=#{type}")
    @Select("SELECT SUM(num) FROM tb_order WHERE DATE(use_date)=CURDATE() AND type=#{type}")
    Integer countTicket(@Param("type") String type);

    //@Select("select count(1) num from tb_order where DATE(use_date)=CURDATE() and type=#{type} GROUP BY time")
    @Select("SELECT SUM(num) FROM tb_order WHERE DATE(use_date)=CURDATE() AND type=#{type} group by time")
    List<Integer> countGroupTime(@Param("type") String type);

    @Select("select type,count(1) num from tb_order where DATE(use_date)=CURDATE() group by type")
    List<OrderEntity> countProduct();

    @Select("select sum(num) num ,SUM(price) price ,type from tb_order where DATE(use_date)=CURDATE() group by type")
    List<OrderEntity> findToDay();

    @Select("SELECT *\n" +
            "FROM tb_order\n" +
            " WHERE NOW() > STR_TO_DATE(CONCAT(use_date, ' ', time, ':00'), '%Y-%m-%d %H:%i:%s')" +
            " and user_name=#{userName}" +
            "ORDER BY use_date DESC, time DESC")
    List<OrderEntity> selectOver(OrderEntity order);

    @Select("SELECT *\n" +
            "FROM tb_order\n" +
            "WHERE NOW() < STR_TO_DATE(CONCAT(use_date, ' ', time, ':00'), '%Y-%m-%d %H:%i:%s')\n" +
            "and user_name=#{userName}" +
            "ORDER BY use_date DESC, time DESC")
    List<OrderEntity> selectFuture(OrderEntity order);
}
