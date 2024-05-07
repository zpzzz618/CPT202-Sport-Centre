package com.ming.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ming.entity.CommunityEntity;
import com.ming.entity.CommunityLikeEntity;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2024-04-08 12:16:45
 */
@Mapper
public interface CommunityLikeDao extends BaseMapper<CommunityLikeEntity> {

}
