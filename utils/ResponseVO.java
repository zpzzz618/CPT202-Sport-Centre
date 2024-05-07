package com.ming.utils;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

/**
 * 统一返回
 *
 * @author Malegod
 */
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseVO {
    private Integer code;
    private String msg;
    private Boolean success;
    private JSONObject data;

    private ResponseVO(){};
    public static ResponseVO success() {
        ResponseVO msg = new ResponseVO();
        msg.setCode(200);
        msg.setMsg("Success");
        msg.setSuccess(true);
        return msg;
    }

    public static ResponseVO fail() {
        return fail("Fail");
    }

    public static ResponseVO fail(String m) {
        return fail(m, 500);
    }

    public static ResponseVO fail(String m, int code) {
        ResponseVO msg = new ResponseVO();
        msg.setCode(code);
        msg.setMsg(m);
        msg.setSuccess(false);
        return msg;
    }

    public ResponseVO add(String key, Object value) {
        if (null == data) {
            data = new JSONObject();
        }
        data.put(key, value);
        return this;
    }

    public <T> ResponseVO add(T value) {
        if (null == data) {
            data = new JSONObject();
        }
        String s = JSONObject.toJSONString(value);
        JSONObject jsonObject = JSONObject.parseObject(s);
        this.data.putAll(jsonObject);
        return this;
    }


}
