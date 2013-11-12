from django.http import HttpResponse
from django.shortcuts import render_to_response
from elections12.models import Story
from datetime import datetime, date, time

def indexResults(request):
    news_stories = Story.objects.order_by('-pub_date').filter(story_type='ns')
    opinion_stories = Story.objects.order_by('-pub_date').filter(story_type='op')

    return render_to_response('elections12/index-results.html', {
        'news_stories': news_stories,
        'opinion_stories': opinion_stories,
    })

def indexNew(request):
    news_stories = Story.objects.order_by('-pub_date').filter(featured=0,story_type='ns')
    opinion_stories = Story.objects.order_by('-pub_date').filter(featured=0,story_type='op')
    multimedia_stories = Story.objects.order_by('-pub_date').filter(featured=0,story_type='mm')

    featured_story = Story.objects.order_by('-pub_date').filter(featured=1).get()

    d = date(2012,11,6)
    t = time(22,00)
    closeTime = datetime.combine(d,t)
    polls_open = (datetime.now() < closeTime)
    now = datetime.now()

    return render_to_response('elections12/index2.html', {
        'news_stories': news_stories,
        'opinion_stories': opinion_stories,
        'featured_story': featured_story,
        'multimedia_stories': multimedia_stories,
        'polls_open' : polls_open,
        'now' : now,
        'closeTime' : closeTime,
    })

def stats(request):
    return render_to_response('elections12/stats.html', {})

def exitPolls(request):
    return render_to_response('elections12/exitpolls.html', {})

def allstats(request):
    return render_to_response('elections12/allstats.html', {})
