==== https://musicbrainz.org/doc/MusicBrainz_API/Search ====
==== https://musicbrainz.org/doc/MusicBrainz_Entity ====


# https://musicbrainz.org/ws/2/

## We have 13 resources on our API which represent core ENTITIES in our database:
1. area, artist, event, genre, instrument, label, place, recording, release, release-group, series, work, url

## And we allow you to perform lookups based on other unique identifiers with these resources:
1. discid, isrc, iswc 

### On each entity resource, you can perform three different GET requests:

1. lookup:   /<ENTITY_TYPE>/<MBID>?inc=<INC>
2. browse:   /<RESULT_ENTITY_TYPE>?<BROWSING_ENTITY_TYPE>=<MBID>&limit=<LIMIT>&offset=<OFFSET>&inc=<INC>
3. search:   /<ENTITY_TYPE>?query=<QUERY>&limit=<LIMIT>&offset=<OFFSET>