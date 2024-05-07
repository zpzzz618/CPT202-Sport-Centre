package com.ming.mapper;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ming.entity.CommunityEntity;
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
public interface CommunityDao extends BaseMapper<CommunityEntity> {
    List<CommunityEntity> findInfo(CommunityEntity communityEntity);

    @Select("select avg(experience) experience,avg(environment) environment,avg(facilities) facilities,avg(service) service from tb_community where type=#{type}")
    JSONObject loadScore(@Param("type") String type);
}
