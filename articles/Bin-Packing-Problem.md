---
title: Bin Packing Problem
date: 2025-11-04
image:
category: programming
---
# Definition:
Solutions to the bin packing problem are extremely important as "Bin Packing" is very frequently used. This might sound like a silly example but you can imagine some other examples from this one, imagine you had to fill a truck with different sized containers, and you loaded them up all the way but at the end you had an extra box that was supposed to fit. Your only solution now is to repack the entire truck to get it to fit because of course you wouldn't make the truck make 2 trips! This is the bin packing problem; how can we most optimally load a container space with bins, the goal being a minimum number of bins. And solutions to this come in 2 different types.
# Online Vs Offline
## Online:
The harder Situation is **Online** this is harder because it means that you're unaware of the incoming data, meaning, you wont know what size object(data) is coming next or even if there is anything coming at all.
## Offline:
The much easier situation is when you know all the data *before packing*. This means you are not leaving anything to chance and now have the option to create an optimal solution or to create a good and fast solution (There are times when you wouldnt need optimal)
# Next Fit, First Fit, Best Fit 

## Next Fit:
This is really only used in online situations, basically it just puts the next item in the current bin, unless it doesnt fit, then it creates a new bin and places it, this means its the fastest method (O(n) speed) but creates many more bins then the other 2 methods. Key Idea: Never open old bins.

## First Fit:
The goal here is speed with efficiency, so your not going to get the *most* optimal solution but you will get a fast solution that is relatively accurate. Its O(n^2) speed. It scans bins in order and places the item in **The first bin it fits in**. So it does re-open bins.

## Best Fit:
The goal here is to be as close to possible without being too slow, when you need closer to optimal this is what you want. It scans for the tightest fit and places there. Its also generally O(n^2), though slower then first fit but its accurate above speed.

------------------------------------------------
# Code
(*Online is show, as offline is exactly the same as online just sort the vector in descending order*)
## Code for Next Fit: 
	vector<vector<double>> BinPacking::onlineNextFit(const vector<double>& items){//given an arr of items, sort into bins and return a statement regarding info
        vector<vector<double>> bins; // store items in bins
        vector<double> remaining;// track remaining space in each bin

          for (double item : items) {
            // if no bins yet, create the first one
            if (bins.empty()) {
                bins.push_back({item});
                remaining.push_back(capacity - item);
                continue;
                }
                // check only the last bin (Next Fit)
                int last = bins.size() - 1;
                if (remaining[last] >= item) {
                    bins[last].push_back(item);
                    remaining[last] -= item;
                } else {
                    bins.push_back({item});
                    remaining.push_back(capacity - item);
                }
            }
        return bins;
    };
## Code for First Fit:
 	vector<vector<double>> BinPacking::onlineFirstFit(const vector<double>& items){
            vector<vector<double>> bins;
			vector<double> remaining;

			for(int i=0;i<items.size();i++){
				bool placed = false;
				double item = items[i];
				
				for(int j=0;j<remaining.size();j++){
					if(remaining[j]>=item){
						remaining[j] -=item;
						bins[j].push_back(item);
						placed=true;
						break;
						}
					}
					if(!placed){//else has to be outside the for, the for loops over already fitting elements.
						bins.push_back({item});
						remaining.push_back(capacity - item);
					}
				}return bins;
        };

## Code for Best Fit:

	vector<vector<double>> BinPacking::onlineBestFit(const vector<double>& items){
            vector<vector<double>> bins;
		    vector<double> remaining;

		    for(double item: items){
			    int bestBin =-1;
			    double tightness = capacity + 1;// just to keep +#'s when checking

			//find which bin has tightest working fit!
			for(int j=0; j<remaining.size();j++){
				if(remaining[j]>=item &&(remaining[j] - item) < tightness){//if the remaining[j](value in remaining at a spot is greater then item and )
					bestBin = j;
					tightness = remaining[j] - item;	
				}
				//now actually place
			}if(bestBin !=-1){//if the bin was updated
				remaining[bestBin] -=item;
				bins[bestBin].push_back(item);
			}else{
				bins.push_back({item});
				remaining.push_back(capacity - item);
			}
		}return bins;
        };