package com.ming.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ming.entity.OrderEntity;
import com.ming.mapper.OrderDao;
import com.ming.utils.ExcelUtils;
import com.ming.utils.ResponseVO;
import lombok.SneakyThrows;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@RestController
@RequestMapping("order")
public class OrderController {

    @Autowired
    private OrderDao orderDao;

    /**
     * 保存
     *
     * @param order
     * @return
     */
    @RequestMapping("save")
    public ResponseVO save(@RequestBody OrderEntity order) {
        orderDao.insert(order);
        return ResponseVO.success();
    }

    /**
     * 保存
     *
     * @param json
     * @return
     */
    @RequestMapping("find")
    public ResponseVO find(@RequestBody JSONObject json) {
        OrderEntity order = json.toJavaObject(OrderEntity.class);
        QueryWrapper<OrderEntity> queryWrapper = new QueryWrapper<>(order);
        queryWrapper.orderByDesc("use_date");
        List<OrderEntity> orderEntities = orderDao.selectList(queryWrapper);
        return ResponseVO.success().add("list", orderEntities);
    }

    /**
     * 保存
     *
     * @param json
     * @return
     */
    @RequestMapping("find2")
    public ResponseVO find2(@RequestBody JSONObject json) {
        String findType = json.getString("findType");
        OrderEntity order = json.toJavaObject(OrderEntity.class);

        if (StringUtils.equals(findType, "all")) {
            QueryWrapper<OrderEntity> queryWrapper = new QueryWrapper<>(order);
            queryWrapper.orderByDesc("use_date");
            List<OrderEntity> orderEntities = orderDao.selectList(queryWrapper);
            return ResponseVO.success().add("list", orderEntities);
        }
        else if ((StringUtils.equals(findType, "over"))) {
            List<OrderEntity> orderEntities = orderDao.selectOver(order);
            return ResponseVO.success().add("list", orderEntities);
        }
        else if (StringUtils.equals(findType, "future")) {
            List<OrderEntity> orderEntities = orderDao.selectFuture(order);
            return ResponseVO.success().add("list", orderEntities);
        }
        else {
            return ResponseVO.fail("Invalid find type");
        }
    }


    /**
     * 获取票的数量
     *
     * @param order
     * @return
     */
    @RequestMapping("groupTick")
    public ResponseVO groupTick(@RequestBody OrderEntity order) {
        int count = orderDao.countTicket(order.getType());
        List<Integer> orderEntities = orderDao.countGroupTime(order.getType());
        return ResponseVO.success().add("count", count).add("list", orderEntities);
    }


    /**
     * 获取热力图数量
     *
     * @return
     */
    @RequestMapping("groupProduct")
    /*public ResponseVO groupProduct() {
        List<OrderEntity> orderEntities = orderDao.countProduct();
        JSONObject jsonObject = new JSONObject();
        for (OrderEntity orderEntity : orderEntities) {
            jsonObject.put(orderEntity.getType(), orderEntity.getNum());
        }
        return ResponseVO.success().add("list", jsonObject);
    }*/
    public ResponseVO groupProduct() {
        List<String> types = Arrays.asList("Swim", "Basketball", "TableTennis", "Fitness", "Badminton", "Volleyball", "Tennis");
        List<Map<String, Object>> results = new ArrayList<>();

        for (String type : types) {
            Map<String, Object> map = new HashMap<>();
            map.put("type", type);
            map.put("numTotal", orderDao.countTicket(type));
            map.put("orderCount", orderDao.countGroupTime(type).size());
            results.add(map);
        }

        return ResponseVO.success().add("list", results);
    }



    @SneakyThrows
    @RequestMapping("downloadData")
    public void downloadData(HttpServletResponse response) {
        List<OrderEntity> toDay = orderDao.findToDay();
        String[] titles = {"Sales Amount", "Tickets No", "Sport Activity"};
        String[] values = {"price", "num", "type"};
        Workbook sheets = ExcelUtils.ExportExcel(toDay, titles, values);
        response.setContentType("application/vnd.ms-excel;chartset=utf-8");
        ServletOutputStream out = response.getOutputStream();
        sheets.write(out);
        out.flush();
        out.close();
    }


    @RequestMapping("deleteByid")
    public ResponseVO deleteByid(@RequestBody OrderEntity order) {
        orderDao.deleteById(order.getId());
        return ResponseVO.success();
    }
}
