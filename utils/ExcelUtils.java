package com.ming.utils;

import lombok.SneakyThrows;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.util.StringUtils;

import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * 导出excel
 *
 * @author Malegod
 */
public class ExcelUtils {

    @SneakyThrows
    public static <T> Workbook ExportExcel(List<T> list, String[] titles, String[] values) {

        SXSSFWorkbook wb = new SXSSFWorkbook(100);
        Sheet sheet = wb.createSheet();
        Row row = sheet.createRow(0);
        //给单元格设置样式
        CellStyle cellStyle = wb.createCellStyle();
        Font font = wb.createFont();
        //设置字体大小
        font.setFontHeightInPoints((short) 12);
        //设置字体加粗
        font.setBold(true);
        //给字体设置样式
        cellStyle.setFont(font);
        //设置单元格背景颜色
        cellStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
        //设置单元格填充样式(使用纯色背景颜色填充)
        cellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        // 创建边框样式
        cellStyle.setBorderTop(BorderStyle.THIN);
        cellStyle.setBorderBottom(BorderStyle.THIN);
        cellStyle.setBorderLeft(BorderStyle.THIN);
        cellStyle.setBorderRight(BorderStyle.THIN);

        for (int i = 0; i < titles.length; i++) {
            Cell cell = row.createCell(i);
            cell.setCellValue(titles[i]);
            cell.setCellStyle(cellStyle);
            //设置列的宽度
            sheet.setColumnWidth(i, 200 * 50);
        }
        for (int j = 0; j < list.size(); j++) {
            Row rowData = sheet.createRow(j + 1);
            T t = list.get(j);
            Class<?> aClass = t.getClass();
            for (int i = 0; i < values.length; i++) {
                String val = values[i];
                Method method = aClass.getMethod("get" + StringUtil.captureName(val));
                Object invoke = method.invoke(t);
                Cell cell = rowData.createCell(i);
                cell.setCellValue(invoke + "");
            }
        }
        return wb;
    }
}
