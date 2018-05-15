package org.ipfsbox.battery.controller;

import com.common.web.AbstractController;
import com.common.web.IExecute;
import org.ipfsbox.battery.model.Pins;
import org.ipfsbox.battery.service.PinsService;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.*;

/**
 * Created by liang on 2018/04/27.
 */

@Controller
@RequestMapping("/pins")
public class PinsController extends AbstractController {

    @Resource
    private PinsService pinService;

    /**
     * @Description: 保存pins
     */
    @RequestMapping(value = "/save")
    @ResponseBody
    public  Map<String, Object> save(String hashValue){
        return buildMessage(new IExecute() {
            @Override
            public Object getData() {
                Pins pins = new Pins();
                pins.setHashValue(hashValue);
                Pins result = null;
                result = pinService.findByOne(pins);
                if (result == null){
                    pinService.savePins(hashValue);
                }
                return null;
            }
        });
    }

    /**
     * @Description: 删除pins
     */
    @RequestMapping(value = "/del")
    @ResponseBody
    public Map<String, Object> del(Pins entity) {
        return buildMessage(new IExecute() {
            @Override
            public Object getData() {
                Pins pin = pinService.findById(entity.getId());
                pinService.delPins(pin);
                pinService.delById(entity.getId());
                return null;
            }
        });
    }

    /**
     * @Description: 查找pins
     */
    @RequestMapping(value = "/view")
    @ResponseBody
    public Map<String, Object> view(Long id) {
        return buildMessage(new IExecute() {
            @Override
            public Object getData() {
                return pinService.findById(id);
            }
        });
    }

    /**
     * @Description: pins列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Map<String, Object> list(Pins query, Pageable pageable){
        return buildMessage(new IExecute() {
            @Override
            public Object getData() {
                return pinService.queryByPage(query, pageable);
            }
        });
    }


}
