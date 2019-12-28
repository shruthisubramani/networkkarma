import React, { Component } from 'react'
import { Card,Typography } from 'antd'
const { Text, Title } = Typography;

const firstResume = `8+ years of experience in Network and Security engineering and Network Infrastructure, routing, switching, firewall technologies, system design, implementation, troubleshooting of complex network systems, enterprise network security, wireless design, and data network design, capacity management and network growth. 
In-depth Cisco technology experience/knowledge in design, implementation, administration and support. 
Strong hands on experience in installing, configuring , and troubleshooting of Cisco 7600, 7200, 3800, 3600, 2800, 2600, 2500 and 1800 series Routers, Cisco Catalyst 6500, 4500, 3750, 2950 and 3500XL series switches. 
Designing, Implementing and Troubleshooting Cisco 3750, 3550, 3560, 2924, 6509-V-E, 6513, 6504, 6503, 6506, 6500 series switches. 
Advanced knowledge of OSI model, TCP/IP, Internet technologies, system security, firewall infrastructure, network architecture and Cisco network routing / switching (Layer 2 and 3) experience, including LAN and WAN, design and implementation which includes Layer 1 to Layer 7 experience. 
Strong experience in Network security using ASA Firewall, Checkpoint, Palo Alto, Cisco Sourcefire IDS/IPS and IPSEC/SSL VPN. 
Expertise in network protocols, Firewalls and Communication Network design. 
Migrated and implemented new solutions with Cisco ASA Firewall series 5505, 5510, 5512-X 
Configuring Site-Site VPN on Checkpoint Firewall with R77 GAIA. 
Implemented Checkpoint FW Interface, NAT and VLAN using R77 GAIA Smart Dashboard. 
Advanced knowledge, design, installation, configuration, maintenance, migration and administration of Checkpoint Firewall R55 up to R77. 
Experienced in handling Panorama firewall management tool to administer Palo firewalls. 
Configure all Palo Alto Networks Firewall models (PA-2k, PA-3k, PA-5k etc.) as well as a centralized management system (Panorama) to manage large scale firewall deployments 
Checkpoint VPN-1/ Firewall-1, 3D Analysis, GAiA, Standalone & Distributed setup, Security management, Log server, Secure platform (SPLAT), License management. 
Experience in deploying Check Point Provider-1 NGX and configured CMAs 
Experience with migrate Checkpoint VPN rules over to the Juniper Pulse SSL solution. Migration with both Checkpoint and Cisco ASA firewall experience. 
Advanced knowledge, design, installation, configuration, maintenance and administration of Juniper SRX Firewall, Juniper EX and Juniper MX devices. 
Implemented security policies using ACL, Firewall, IPSEC, SSL, VPN, IPS/IDS, AAA(TACACS+ & RADIUS) 
Hands on experience with packet sniffer, TCP DUMP and Wireshark for packet monitoring. 
Configuring & Managing LAN, WAN, VPN and Firewall of Juniper MX Routers for End Users 
Work experience on Bluecoat Proxy SG for Content filtering and URL filtering. 
Basic knowledge of CISCO ACE and F5 Load Balancers. 
Advanced knowledge in Cisco Switches and Routers Configurations. 
Designing, Implementing and Troubleshooting Cisco Routers 3845/ 3745/ 2821/2600 using Static, RIP, IGRP, OSPF, EIGRP & experience with Checkpoint, Cisco PIX & ASA devices. 
Advanced knowledge in TCP/IP suite and routing protocols, such as OSPF and EIGRP. 
Knowledge in Documenting and preparing the Process related Operational Manuals 
Finely tuned analytical/critical thinking and debugging skills with excellent verbal and written communication skills. 
Highly enthusiastic, creative team player, project implementation, analytical, interpersonal and communication skills
`
export default class Resume extends Component {
  render() {
    return (
      <Card>
        <ol>
            {
              firstResume.split('\n').map(eachLine=>{
                  return<li>{eachLine}</li>
              })
            }
        </ol>
      </Card>
    )
  }
}
