package com.ming.utils;

import org.apache.commons.lang3.StringUtils;

import java.util.Objects;
import java.util.regex.Pattern;

/**
 * 字符串工具
 */
public class StringUtil extends StringUtils {
    /**
     * 截取中间数
     *
     * @param str      需要截取的字符串
     * @param strStart 开始位置
     * @param strEnd   结束位置
     * @return
     */
    public static String subString(String str, String strStart, String strEnd) {
        /* 找出指定的2个字符在 该字符串里面的 位置 */
        int strStartIndex = str.indexOf(strStart);
        int strEndIndex = str.lastIndexOf(strEnd);
        /* index 为负数 即表示该字符串中 没有该字符 */
        if (strStartIndex < 0) {
            return "字符串 :---->" + str + "<---- 中不存在 " + strStart + ", 无法截取目标字符串";
        }
        if (strEndIndex < 0) {
            return "字符串 :---->" + str + "<---- 中不存在 " + strEnd + ", 无法截取目标字符串";
        }
        /* 开始截取 */
        String result = str.substring(strStartIndex, strEndIndex).substring(strStart.length());
        return result;
    }


    /**
     * 字符串首字母大写
     *
     * @param name 字符串
     * @return
     */
    public static String captureName(String name) {
        char[] cs = name.toCharArray();
        cs[0] -= 32;
        return String.valueOf(cs);

    }

    /**
     * 判断第一个字符是不是数字
     *
     * @param str
     * @return
     */
    public static boolean isNumber(String str) {
        //如果字符串是空串或者null直接返回false　　　　　
        if (Objects.isNull(str)) {
            return false;
        }
        Pattern pattern = Pattern.compile(Constant.isNumber);
        return pattern.matcher(str).matches();
    }



}
