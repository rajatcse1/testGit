#!/bin/bash
COUNTER=100
while [  $COUNTER -lt 500 ]; do
 #echo The counter is $COUNTER
 cp template.html $COUNTER.html
 sed -i -e 's/problem_number/'$COUNTER'/g' $COUNTER.html
 let COUNTER=COUNTER+1 
done
echo all done