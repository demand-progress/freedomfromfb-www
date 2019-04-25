const CONF = {
    actionKitPageShortName: 'freedom-from-fb',
    actionKitPageId: 2693,
    prettyCampaignName: 'Freedom From Facebook',
    callCampaign: 'freedom-from-fb',
    callPowerId: 38
};
const URLS = {
    actionKit: 'https://act.demandprogress.org/act/',
    count: 'https://act.demandprogress.org/progress/' + CONF.actionKitPageShortName + '?callback=onFetchSignatureCounts',
    facebook: 'https://www.facebook.com/sharer.php?u=',
    twitter:  'https://twitter.com/intent/tweet?text=',
    feedback: 'https://dp-feedback-tool.herokuapp.com/api/v1/feedback?'
};

export { CONF, URLS };