import { Injectable } from '@angular/core'
import { Select2OptionData } from 'ng2-select2'

@Injectable()
export class Select2Grouping{
    transform(value: Array<any>, optionGroupField: string, idField: string, textField: string): Array<Select2OptionData> {
        const groupedObj = value.reduce((prev, cur)=> {
            if(!prev[cur[optionGroupField]]) {
                prev[cur[optionGroupField]] = [cur];
            } else {
                prev[cur[optionGroupField]].push(cur);
            }
            return prev;
        }, {});
    
        var arr = new Array<Select2OptionData>();
        arr.push({ id: "", text: "" })

        return arr.concat(Object.keys(groupedObj).map(key => (
        { 
            id: "0", 
            text: key, 
            children: groupedObj[key].map(obj => ({ id: obj[idField], text: obj[textField] })) 
        })));
    }
}