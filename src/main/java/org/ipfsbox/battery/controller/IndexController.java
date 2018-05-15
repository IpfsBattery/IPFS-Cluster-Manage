package org.ipfsbox.battery.controller;

import com.common.web.AbstractController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Date;

/**
 * Created by liang on 2018/5/4.
 */
@Controller
@RequestMapping()
public class IndexController extends AbstractController {
    protected static final Long ver = new Date().getTime() / 1000;


    private String appDomain = "localhost";
    @RequestMapping("/")
    public String index(Model model) {
        //tovm("ver", ver);
        model.addAttribute("ver", ver);
        model.addAttribute("root_domain",appDomain);
        return "index";
    }

}