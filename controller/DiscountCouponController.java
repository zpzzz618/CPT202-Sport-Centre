package com.ming.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ming.entity.DiscountCouponEntity;
import com.ming.mapper.DiscountCouponDao;
import com.ming.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("discountCoupon")
public class DiscountCouponController {

    @Autowired
    private DiscountCouponDao discountCouponDao;

    /**
     * 保存
     *
     * @param discountCouponEntity
     * @return
     */
    @RequestMapping("save")
    public ResponseVO save(@RequestBody DiscountCouponEntity discountCouponEntity) {
        discountCouponDao.insert(discountCouponEntity);
        return ResponseVO.success();
    }

    /**
     * 查询
     *
     * @param discountCouponEntity
     * @return
     */
    @RequestMapping("find")
    public ResponseVO find(@RequestBody DiscountCouponEntity discountCouponEntity) {
        QueryWrapper<DiscountCouponEntity> queryWrapper = new QueryWrapper<>(discountCouponEntity);
        List<DiscountCouponEntity> discountCouponEntities = discountCouponDao.selectList(queryWrapper);
        return ResponseVO.success().add("list", discountCouponEntities);
    }

    /**
     * 修改
     *
     * @param discountCouponEntity
     * @return
     */
    @RequestMapping("update")
    public ResponseVO update(@RequestBody DiscountCouponEntity discountCouponEntity) {
        discountCouponDao.updateById(discountCouponEntity);
        return ResponseVO.success();
    }

}
