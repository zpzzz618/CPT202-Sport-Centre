package com.ming.utils;

import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Properties;

/**
 * 配置发送基本参数
 * 发件人邮箱的SMTP服务器地址
 * 前三个不可更改
 */
public class SendEmail {

    /**
     * 开启授权码的邮箱
     */
    private final static String MyEmail = "2303702538@qq.com";
    /**
     * 授权码
     */
    private final static String AuthorizationCode = "zcyjludgsfayecei";
    /**
     * qq邮箱的 SMTP 服务器地址
     */
    private final static String SMTPEmail = "smtp.qq.com";

    /**
     * 发送邮箱
     *
     * @param theme        主题（标题）
     * @param content      内容
     * @param harvestEmail 收件人
     */
    public static void send(String theme, String content, String harvestEmail) {
        try {
            //创建连接邮件服务器的参数配置
            // 参数配置
            Properties props = new Properties();
            // 发件人的邮箱的 SMTP 服务器地址
            props.setProperty("mail.smtp.host", SMTPEmail);
            // 需要请求认证
            props.setProperty("mail.smtp.auth", "true");
            props.setProperty("mail.transport.protocol", "smtp");
            //根据配置创建会话对象和邮件服务器交互
            Session session = Session.getInstance(props);
            // 设置为debug模式, 可以查看详细的发送日志
            session.setDebug(false);
            //创建邮件
            MimeMessage message = createEmail(session, MyEmail, harvestEmail, content, theme);
            //使用Session获取邮件传输对象
            Transport transport = session.getTransport();
            //使用邮箱账号和密码连接邮件服务器
            transport.connect(MyEmail, AuthorizationCode);
            //发送邮件
            transport.sendMessage(message, message.getAllRecipients());
            //关闭连接
            transport.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    /**
     * 创建邮件
     */
    private static MimeMessage createEmail(Session session, String sendMail, String receiveMail, String content, String theme) throws Exception {
        //创建一封邮件
        MimeMessage message = new MimeMessage(session);
        //发件人
        message.setFrom(new InternetAddress(sendMail, "Sport Center", "UTF-8"));
        //收件人
        message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(receiveMail, "XX User", "UTF-8"));
        //邮件主题
        message.setSubject(theme, "UTF-8");
        //邮件正文
        message.setContent(content, "text/html;charset=UTF-8");
        //设置发件时间
        message.setSentDate(new Date());
        //保存设置
        message.saveChanges();
        return message;
    }

}
