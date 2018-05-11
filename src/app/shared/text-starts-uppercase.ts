import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
	selector: '[text-starts-uppercase]',
	providers: [
	{
		provide: NG_VALIDATORS,
		useExisting: forwardRef(() => TextStartsUpperValidator ),
		multi: true
	}
	]
})
export class TextStartsUpperValidator implements Validator {
	@Input('text-starts-uppercase') param:string; 
	validate(control: AbstractControl) {
		let initChar = this.param.substring(0,1);
		let upperChar = this.param.substring(0,1).toUpperCase();
		console.log("initChar: ",initChar);
		console.log("upperChar: ", upperChar);
		let text = control.value;
		if (text && initChar == upperChar) {
			return {
				textContains: {
					textContains: this.param
				}
			}
		} else {
			return null;
		}
	}
}