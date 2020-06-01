#!/bin/bash
cd /root/ragemp-srv/
rm -r opensourceprivate
rm -r packages client_packages
git clone https://github.com/SnillocTV/opensourceprivate
mv /root/ragemp-srv/opensourceprivate/packages /root/ragemp-srv/
mv /root/ragemp-srv/opensourceprivate/client_packages /root/ragemp-srv/
cd /root/ragemp-srv/
rm -r /root/ragemp-srv/opensourceprivate/
sleep 1

