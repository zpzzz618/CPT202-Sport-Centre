package com.ming.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ming.entity.ProductEntity;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author The-One
 */
@Mapper
public interface ProductDao extends BaseMapper<ProductEntity> {

}
