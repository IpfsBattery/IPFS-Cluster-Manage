package org.ipfsbox.battery.model;

import com.common.util.AbstractBaseEntity;

/**
 * Created by liang on 2018/4/27.
 */
public class Pins extends AbstractBaseEntity implements java.io.Serializable {


    /**Pin地址**/
    private String hashValue;


    public String getHashValue() {
        return hashValue;
    }

    public void setHashValue(String hashValue) {
        this.hashValue = hashValue;
    }

}
