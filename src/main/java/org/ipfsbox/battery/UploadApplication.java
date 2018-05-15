package org.ipfsbox.battery;

import com.common.mongo.SaveMongoEventListener;
import io.ipfs.api.IPFS;
import org.ipfsbox.battery.model.IPFSCluster;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;

import java.io.IOException;


@SpringBootApplication(scanBasePackages = {"com.common","org.ipfsbox.battery"})
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class UploadApplication {

	public static void main(String[] args) {
		SpringApplication.run(UploadApplication.class, args);
	}

	@Bean
	public IPFS ipfs() throws IOException {
		IPFS ipfs = new IPFS("/ip4/127.0.0.1/tcp/5001");
		ipfs.refs.local();
		return ipfs;
	}

	@Bean
	public IPFSCluster ipfsCluster() {
		IPFSCluster ipfsCluster = new IPFSCluster("127.0.0.1", 9094);
		return ipfsCluster;
	}

	@Bean
	public SaveMongoEventListener saveMongoEventListener(){
		return new SaveMongoEventListener();

	}



}
