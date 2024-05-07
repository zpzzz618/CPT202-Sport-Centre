package com.ming.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ming.entity.ProductEntity;
import com.ming.mapper.ProductDao;
import com.ming.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    private ProductDao productDao;

    @RequestMapping("find")
    public ResponseVO find(@RequestBody ProductEntity product) {
        QueryWrapper<ProductEntity> queryWrapper = new QueryWrapper<>(product);
        List<ProductEntity> productEntities = productDao.selectList(queryWrapper);
        return ResponseVO.success().add("list", productEntities);
    }


    @RequestMapping("update")
    public ResponseVO update(@RequestBody ProductEntity product) {
        ProductEntity productEntity = productDao.selectById(product.getId());
        if (null == productEntity) {
            productDao.insert(product);
        } else {
            int i = productDao.updateById(product);
        }
        return ResponseVO.success();
    }

}
