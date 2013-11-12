from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'elections.views.indexNew'),
    url(r'^dev/results', 'elections.views.indexResults'),
    url(r'^exitpolls', 'elections.views.exitPolls'),
    url(r'^stats', 'elections.views.stats'),
    url(r'^allstats', 'elections.views.allstats'),
    # url(r'^elections/', include('elections.foo.urls')),

    url(r'^favicon\.ico$', 'django.views.generic.simple.redirect_to', {'url': '/static/favicon.ico'}),
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
