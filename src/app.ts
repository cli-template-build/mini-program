
App({
  onLaunch(options?: App.ILaunchShowOption): void {
   console.log(`<${'='.repeat(100)}>`);
   console.log('options', options.query);
  }
});
