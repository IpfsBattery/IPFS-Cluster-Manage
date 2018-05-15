package org.ipfsbox.battery.service.impl;

import com.common.mongo.AbstractMongoService;
import com.common.util.StringUtils;
import io.ipfs.api.IPFS;
import io.ipfs.api.MerkleNode;
import io.ipfs.api.NamedStreamable;
import org.ipfsbox.battery.model.IPFSCluster;
import org.ipfsbox.battery.model.Pins;
import org.ipfsbox.battery.service.PinsService;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.xml.stream.events.ProcessingInstruction;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class PinsServiceImpl extends AbstractMongoService<Pins> implements PinsService {
    @Resource
    private MongoTemplate mongoTemplate;

    @Resource
    private IPFSCluster ipfsCluster;

    @Override
    protected Class<Pins> getEntityClass() {
        return Pins.class;
    }


    @Override
    public void savePins(String hashValue){
        ipfsCluster.pins.add(hashValue);
        Pins pins = new Pins();
        pins.setHashValue(hashValue);
        this.save(pins);
    }


    @Override
    public void delPins(Pins pins){
        ipfsCluster.pins.rm(pins.getHashValue());
    }


    @Override
    public List<Pins> queryByName(String name){
        List<Pins> pins = new ArrayList<Pins>();
        Query query = new Query();
        Criteria criteria = Criteria.where("name").regex(name);
        query.addCriteria(criteria);
        query.with(new Sort(new Sort.Order(Sort.Direction.DESC, "createTime")));
        pins = mongoTemplate.find(query, Pins.class);

        return pins;

    }





}
