#!/usr/bin/python3

import requests
import os

OUTDIR = "../static/gifs"

def craft_url(params):
    baseurl = "https://jugglinglab.org/anim"
    # insert redirect param and copy over to prevent mutation outside
    params = dict(redirect="true", **params)
    payload = ";".join(f"{key}={val}" for key, val in params.items())
    return f"{baseurl}?{payload}"

def split_pattern(pattern):
    """
    splits pattern dict into those parameters that
    can be sent over to the gif server and those that cant
    """
    pattern_vars   = ["pattern", "bps", "dwell", "hands", "body", "colors",
                      "propdiam", "prop", "gravity", "bouncefrac", 
                      "squeezebeats", "hss", "handspec", "dwellmax", "hold"]
    animation_vars = ["width", "height", "fps", "stereo", "slowdown", "border",
                      "startpaused", "mousepause", "catchsound", "bouncesound",
                      "camangle", "showground", "view", "hidejugglers"]
    serving_vars   = ["redirect"]
    all_vars = set(pattern_vars + animation_vars + serving_vars)
    url_params, rest = dict(), dict()
    for key, value in pattern.items():
        if key in all_vars:
            url_params[key] = value
        else:
            rest[key] = value
    return url_params, rest


def save_gif(pattern):
    url_params, rest = split_pattern(pattern)
    assert "id" in rest, "no `id` key found in pattern"
    pattern_id = rest["id"]

    gifurl = craft_url(url_params)

    outfname = f"{pattern_id}.gif"
    outpath = os.path.join(OUTDIR, outfname)

    response = requests.get(gifurl)
    if response.ok:
        with open(outpath, 'wb') as outfile:
            outfile.write(response.content)
            return True
    else:
        return False


if __name__ == "__main__":
    save_gif(dict(pattern="42", hss="13", id="temp"))
