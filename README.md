# js-swap
Dynamic Way of Updating A Portion of the HTML without Page Reload


## Usage

1. Append class js-swap and the data elements data-swaptarget and data-swapurl to element you want to trigger the swap
2. add data-swap to the element you want to swap / replace

## Fields
* data-swaptarget and data-swap: A keyword used on two elements to represent a link. This tells the script which elements we want to swa.
* data-swapurl: This would be the form target, the url containing the HTML we want to Switch


```
<form>
	<span data-swap="contact-form">
		<input type="hidden" name="do" value="send" />
		<input type="text" name="subject" id="subject" placeholder="SUBJECT"/>
		<textarea name="content" id="content"></textarea>
	</span>
	<input type="button" name="contact" value="Send" class="js-swap" data-swaptarget="contact-form" data-swapurl="/asset/htmlassets/swap.html"/>
</form>
```
