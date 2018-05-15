package org.ipfsbox.battery.service;

import com.common.mongo.MongoService;
import org.ipfsbox.battery.model.Pins;

import java.io.File;
import java.util.List;

/**
 * @author liang
 * @date 2018/4/27
 * Imageservice
 */
public interface PinsService extends MongoService<Pins> {



    /**
     * savePins
     * @param
     */
    void savePins(String hashValue);



    /**
     * 删除pins
     * @param
     */
    void delPins(Pins pins);

    /**
     * 查询pins
     * @param name
     */
    List<Pins> queryByName(String name);




}
